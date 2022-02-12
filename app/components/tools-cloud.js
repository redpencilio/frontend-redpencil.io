import Component from '@glimmer/component';

export default class ToolsCloudComponent extends Component {
  tools = [
    'Docker',
    'Elixir',
    'Ember.js',
    'Kibana',
    'Elasticsearch',
    'Semantic.works',
    'Python',
    'RDF',
    'Node.js',
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
