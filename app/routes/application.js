import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import ENV from 'frontend-redpencil/config/environment';

export default class ApplicationRoute extends Route {
  @service plausible;
  @service fastboot;

  beforeModel() {
    if (!this.fastboot.isFastBoot) {
      this.startAnalytics();
    }
  }

  startAnalytics() {
    const { domain, apiHost } = ENV.plausible;

    // Values are injected at deploy time; skip tracking when they aren't set.
    if (isConfigured(domain) && isConfigured(apiHost)) {
      this.plausible.enable({
        domain,
        apiHost,
        enableAutoOutboundTracking: true,
      });
    }
  }
}

function isConfigured(value) {
  return value && !value.startsWith('{{');
}
