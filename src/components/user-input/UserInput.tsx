import React, {useState} from 'react';

const UserInput = () => {
    const [userName, setUserName] = useState<string>();

    return (
        <div>
            <input data-testid="userInput-id"
                placeholder={"Input name here."}
                type="text"
                onChange={(event) => {
                   setUserName(event.target.value);
                }}
            />
            <p>
                Hello {userName || 'World'}!
            </p>
        </div>
    );
};


export default UserInput;