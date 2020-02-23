import React from 'react';

interface IAppProps {
    config: any;
}

const App = ({ config }: IAppProps) => {
    return (
        <div>
            <h1>test</h1>
            <pre>{JSON.stringify(config)}</pre>
        </div>
    );
};

export default App;
