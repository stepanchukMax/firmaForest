"use strict"
//==========================================
const TELEGRAM_BOT_TOKEN = '6515549565:AAFQKDKW_Zswu3_zQ0cocxV5Yp6Bf73-oUA';
const TELEGRAM_CHAT_ID = '-931136495';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`


async function sendEmailTelegram(event) {
    event.preventDefault();

    const form = event.target;
    const formBtn = document.querySelector('.form__submit-button button')
    const formSendResult = document.querySelector('.form__send-result')
    formSendResult.textContent = '';


    const { name, email, phone } = Object.fromEntries(new FormData(form).entries());
    
    const text = `Order from ${name}!\nEmail: ${email}\nPhone: ${phone}`;


    try {
        formBtn.textContent = 'Loading...';

        const response = await fetch(API, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
            })
        })
        
        if (response.ok) {
            form.reset()
        } else {
            throw new Error(response.statusText);
        }

    } catch (error) {
        console.error(error);
        

    } finally {
        formBtn.textContent = 'Complete';
    }
}