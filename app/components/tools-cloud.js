import Component from '@glimmer/component';

export default class ToolsCloudComponent extends Component {
  tools = [
    'Docker',
    'Elixir',
    'Ember.js',
    'Kibana',
    'Elasticsearch',
    'Docker Compose',
    'Semantic.works',
    'Python',
    'RDF',
    'Node.js',
    'Emacs',
    'Ruby',
  ];

  get logos() {
    return this.tools.map((tool) => {
      return {
        name: tool,
        image: `${tool.toLowerCase().replace(/\W+/g, '-')}.svg`,
      };
    });
  }
}
