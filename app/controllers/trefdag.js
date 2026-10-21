import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import ENV from 'frontend-redpencil/config/environment';

// TODO(trefdag): placeholders for the Trefdag Vlaanderen Digitaal landing page.
// Anything left at `null` is hidden on the page (or shown without a link), so
// the page stays publishable while these are being filled in.
const CALENDAR_URL = null; // TODO(trefdag): direct booking link (e.g. Calendly / cal.com)
const PRIVACY_POLICY_URL = null; // TODO(trefdag): link to the redpencil.io privacy policy
const SIRUS_URL = null; // TODO(trefdag): Sirus website
const INUITS_URL = null; // TODO(trefdag): inuits website
const VLAIO_LOGO = null; // TODO(trefdag): path to the official VLAIO logo file, e.g. '/assets/vector/logos/vlaio.svg'
const CONTACT_EMAIL = 'info@redpencil.io'; // TODO(trefdag): confirm which address to show

// Case cards. To hide a case that wasn't approved in time, delete or comment
// out its entry; nothing else needs to change.
const CASES = [
  {
    title: 'LBLOD: Gelinkt Notuleren & Loket',
    text: 'Vlaamse lokale besturen publiceren hun besluiten als linked open data. Zo zijn ze voor iedereen doorzoekbaar en herbruikbaar.',
    url: 'https://lokaalbeslist.vlaanderen.be',
    linkLabel: 'Naar Lokaal Beslist',
  },
  // TODO(trefdag): CHECK WITH NGI BEFORE PUBLISHING
  {
    title: 'transportdata.be',
    text: 'Het Belgische nationale toegangspunt voor mobiliteitsdata, met een mobilityDCAT-AP-feed en harvesting van aangesloten bronnen.',
    url: 'https://transportdata.be',
    linkLabel: 'Naar transportdata.be',
  },
  // TODO(trefdag): CHECK WITH STAD GENT BEFORE PUBLISHING; add an outbound url if there is one
  {
    title: 'Stad Gent',
    text: 'Datapijplijnen die bronnen omzetten naar OSLO, met herkomst (provenance) en datakwaliteit vanaf het begin ingebouwd.',
    url: null,
    linkLabel: null,
  },
];

export default class TrefdagController extends Controller {
  @service store;
  @service plausible;

  // Declared so the UTM parameters from the QR code stay in the URL for
  // analytics, and so they can be passed along with form submissions.
  queryParams = ['utm_source', 'utm_medium', 'utm_campaign'];
  @tracked utm_source = null;
  @tracked utm_medium = null;
  @tracked utm_campaign = null;

  calendarUrl = CALENDAR_URL;
  privacyPolicyUrl = PRIVACY_POLICY_URL;
  sirusUrl = SIRUS_URL;
  inuitsUrl = INUITS_URL;
  vlaioLogo = VLAIO_LOGO;
  contactEmail = CONTACT_EMAIL;
  cases = CASES;

  @tracked isSending = false;
  @tracked submitted = false;
  @tracked submittedName = '';
  @tracked submittedWantsMeeting = false;
  @tracked error = false;

  @action
  scrollToContact(event) {
    event.preventDefault();
    const target = document.getElementById('contact');
    if (!target) return;
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    target.focus({ preventScroll: true });
  }

  @action
  async sendForm(event) {
    event.preventDefault();
    if (this.isSending) return;
    this.isSending = true;
    this.error = false;

    const data = new FormData(event.target);
    const name = data.get('name');
    const wantsMeeting = data.has('meeting');

    try {
      const newEmail = this.store.createRecord('email', {
        to: 'meettheteam@redpencil.io',
        subject: `Trefdag 2026: nieuw contact${
          wantsMeeting ? ' (wil een gesprek)' : ''
        } (rpio-website)`,
        from: ENV.mail.fromAddress,
        content: `
            name: ${name}
            organisation: ${data.get('organisation')}
            email: ${data.get('email')}
            wants meeting: ${wantsMeeting ? 'yes' : 'no'}
            message: ${data.get('message')}
            source: ${this.utm_source ?? 'direct'}
          `,
        folder: 'http://semantic.works/id/mail-folders/2',
      });
      await newEmail.save();

      // TODO(trefdag): add "Trefdag contact" as a custom event goal in Plausible
      if (this.plausible.isEnabled) {
        this.plausible.trackEvent('Trefdag contact', {
          meeting: wantsMeeting ? 'yes' : 'no',
          source: this.utm_source ?? 'direct',
        });
      }

      this.submittedName = name;
      this.submittedWantsMeeting = wantsMeeting;
      this.submitted = true;
    } catch (err) {
      this.error = true;
    } finally {
      this.isSending = false;
    }
  }
}
