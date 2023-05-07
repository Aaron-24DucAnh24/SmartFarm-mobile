
const username = 'ducanh_24'
import aioKey from './config'

import axios from "axios"

class ButtonController {

    async setButton(feed, data) {
        try {
            var url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed}/data?x-aio-key=${aioKey}`
            await axios.post(url, {datum: {value: `${data}`}})
        } catch (error) {
            console.log(error)
        }
    }

    async getButton(feed) {
        try {
            var url = `https://io.adafruit.com/api/v2/${username}/feeds/${feed}/data/last?x-aio-key=${aioKey}`
            const message = await axios.get(url)
            return message.data.value=='0'?false:true
        } catch (error) {
            console.log(error)
        }
    }

    async turnoffAll() {
        try {
            await axios.post(
                `https://io.adafruit.com/api/v2/${username}/feeds/fan-button/data?x-aio-key=${aioKey}`,
                {datum: {value: '0'}}
            )            
            await axios.post(
                `https://io.adafruit.com/api/v2/${username}/feeds/light-button/data?x-aio-key=${aioKey}`,
                {datum: {value: '0'}}
            )
            await axios.post(
                `https://io.adafruit.com/api/v2/${username}/feeds/pump-button/data?x-aio-key=${aioKey}`,
                {datum: {value: '0'}}
            )
        } catch (error) {
            console.log(error)
        } 
    }

}

export default new ButtonController()
