import type { Schema, Attribute } from '@strapi/strapi';

export interface SampleGeneralFooter extends Schema.Component {
  collectionName: 'components_sample_general_footers';
  info: {
    displayName: 'GeneralFooter';
    icon: 'quote';
  };
  attributes: {
    footer: Attribute.String;
  };
}

export interface SampleSampleComponent extends Schema.Component {
  collectionName: 'components_sample_sample_components';
  info: {
    displayName: 'sample-component';
  };
  attributes: {
    SampleDate: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'sample.general-footer': SampleGeneralFooter;
      'sample.sample-component': SampleSampleComponent;
    }
  }
}
