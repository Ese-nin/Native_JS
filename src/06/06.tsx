import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name);
    }

    const saveUser = () => {
        alert("user saved")
    }

    const onNameChanged = () => {
        console.log("name changed")
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed: " + event.currentTarget.value)
    }

    return (
        <div><textarea onChange={onNameChanged}
                       onBlur={focusLostHandler}>Rocket</textarea>
            <input type="number"
                   onChange={onAgeChanged}/>
            <button name="delete" onClick={deleteUser}>aaa</button>
            <button name="save" onClick={deleteUser}>aaa</button>
        </div>
    )
}