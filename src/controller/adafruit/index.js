
import config from './config'
import axios  from 'axios'

class AdaController {

    prefix = 'ducanh_24/feeds/'

    async setButton(feed, data) {
        try {
            const response = await axios.post(
               `https://io.adafruit.com/api/v2/${config.options.username}/feeds/${feed}/data?x-aio-key=${config.options.password}`,
               {datum: {value: `${data}`}}
            )
            return response.data.status=='ok'?response.data.data:false
        } catch (error) {
            console.log(error)
        }
    }

    async getFeedValue(feed) {
        try {
            const url = `https://io.adafruit.com/api/v2/${config.options.username}/feeds/${feed}/data/last?x-aio-key=${config.options.password}`
            const message = await axios.get(url)
            return message.data.value=='0'?false:true
        } catch (error) {
            console.log(error)
        }
    }

    async getConditionData(feed) {
        try {
            const url = `https://io.adafruit.com/api/v2/${config.options.username}/feeds/${feed}/data/last?x-aio-key=${config.options.password}`
            const message = await axios.get(url)
            return message.data.value
        } catch (error) {
            console.log(error)
        }
    }

    async turnoffAll() {
        try {
            await this.setButton('fan-button', 0)
            await this.setButton('pump-button', 0)
            await this.setButton('light-button', 0)
        } catch (error) {
            console.log(error)
        } 
    }

}

export default new AdaController()