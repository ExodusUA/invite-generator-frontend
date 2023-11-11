import React, { useEffect } from 'react'
import requestAPI from './requests'
import loading from './loading.svg'

function Main() {

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('uid');

    useEffect(() => {

        const data = requestAPI.sendID(code)

        data.then((res) => {
            window.location.href = res
        }).catch((err) => {
            alert(err)
        })

    }, [])

    return (
        <div class='custom-overlay'>
            <div class='custom-loader'>
                <img class='custom-icon' src={loading} alt="Loading" />
            </div>
        </div>
    )
}

export default Main