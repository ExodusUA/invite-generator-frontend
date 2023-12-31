import React, { useEffect } from 'react'
import requestAPI from './requests'
import loading from './loading.svg'

function Main() {

    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('uid');

    useEffect(() => {

        if (code !== null) {
            const data = requestAPI.sendID(code)

            data.then((res) => {
                window.location.href = res.url
            }).catch((err) => {
                alert(err)
            })
        }
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