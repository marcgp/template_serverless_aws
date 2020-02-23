import { Construct } from '@aws-cdk/core';
import { RestApi, LambdaIntegration } from '@aws-cdk/aws-apigateway';
import { todosGetList } from '../lambdas';

const todosRestApi = (scope: Construct, stackName: string, stackStage: string, environment?: { [key: string]: string }) => {
    const api = new RestApi(scope, 'todosRestApi', {
        restApiName: `${stackStage}-${stackName}-todosRestApi`,
        deploy: true,
        deployOptions: { stageName: stackStage },
    });

    const lambda_todosGetList = todosGetList(scope, stackName, stackStage, environment);

    const endpointTodos = api.root.addResource('todos');
    endpointTodos.addMethod('GET', new LambdaIntegration(lambda_todosGetList));

    return api;
};

export default todosRestApi;
