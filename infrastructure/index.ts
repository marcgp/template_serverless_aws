import { App } from '@aws-cdk/core';
import { testStack } from './stacks';

const app = new App({
    context: {
        '@aws-cdk/core:enableStackNameDuplicates': 'true',
        'aws-cdk:enableDiffNoFail': 'true',
    },
});

testStack(app, 'teststack', 'dev', 'eu-west-1');
