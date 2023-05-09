
import axios from "axios"
import config from './config'

class ButtonController {

    async setButton(feed, data) {
        try {
            const response = await axios.post(config.url + 'button/' + `${feed}`, {value: data})
            return response.data.status=='ok'?response.data.data:false
        } catch (error) {
            console.log(error)
        }
    }

    async getButton(feed) {
        try {
            var url = `https://io.adafruit.com/api/v2/${config.username}/feeds/${feed}/data/last?x-aio-key=${config.aioKey}`
            const message = await axios.get(url)
            return message.data.value=='0'?false:true
        } catch (error) {
            console.log(error)
        }
    }

    async turnoffAll() {
        try {
            await axios.post(config.url + 'button/' + 'fan-button', {value: 0})
            await axios.post(config.url + 'button/' + 'light-button', {value: 0})
            await axios.post(config.url + 'button/' + 'pump-button', {value: 0})
        } catch (error) {
            console.log(error)
        } 
    }

}

export default new ButtonController()
