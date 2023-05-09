import config from "./config"
import axios from "axios"

class ThresholdsController {
    async setThreshold(name, value) {
        try {
            const message = await axios.post(config.url + 'threshold/' + name, {'value': value})
            return message.data.status=='ok'?message.data.data:false
        } catch (error) {
            console.log(error)
        }
    }

    async getThreshold() {
        try {
            
        } catch (error) {
            console.log(error);
        }
    }

}

export default new ThresholdsController()
