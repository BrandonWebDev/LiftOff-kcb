import { Button } from "react-bootstrap"
import './Buttons.css';
import { useDispatch } from "react-redux";
import React from 'react';
import { useNavigate } from 'react-router';







// React Element => Sign-in Button
export const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // on click event
    const handleClick = () => {
        // Get email and password from the log-in form
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        // Put info in request body
            const reqBody = {
                "username": email,
                "password": password
            }   


            const callBackEndAuth = async() => {
                try{

                    const response = await fetch("http://localhost:8080/api/auth/login", {
                        headers: {
                            "Content-type": "application/json"
                        },
                        method: "post",
                        body: JSON.stringify(reqBody)
                    });
                    if(response.ok){
                        const jsonResponse = response.json();
                        return jsonResponse;
                    }
                    else {
                        console.log("auth failed");
                    }
        
                } catch(e){
                    console.log(e);
                }
            }

            const getUserInfo = async(jwt) => {
                const auth = "Bearer " + jwt.payload.accessToken
                console.log(auth);
                try{
                    const response = await fetch("http://localhost:8080/api/users/roles", {
                        headers: {
                            "Content-type": "application/json",
                            "Cache-Control": "no-cache",
                            "Authorization": auth
                        },
                        method: "get",
                    });
                    if(response.ok){
                        const jsonResponse = response.json();
                        return jsonResponse;
                    }
                    else {
                        console.log("jwt failed");
                    }
        
                } catch(e){
                    console.log(e);
                }
            }






            callBackEndAuth().then(response => {
                localStorage.setItem('jwt', response["accessToken"])
                return dispatch({type: 'jwt/changeState', payload: response})
            }).then((response)=> getUserInfo(response)).then((response)=> {
                //console.log(response.roles[0].name);
                const userRole = response.roles[0].name;
                if(userRole === "USER"){
                    localStorage.setItem("role", "user")
                    dispatch({type:'loginInfo/changeState', payload: 'user'})
                    navigate("/user/home", {replace: true});
                }
                else if(userRole === "OWNER"){
                    localStorage.setItem("role", "owner")
                    dispatch({type:'loginInfo/changeState', payload: 'owner'})
                    navigate("/businessowner/home", {replace: true})
                }
            })
            

    }


    return (
        <Button
        onClick={handleClick}
        id='signInButton'
        className='m-3 mb-0'
        variant='warning'
        >Sign in</Button>
    )
}

