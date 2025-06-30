import './styles/index.css'
import UiInput from './components/UiInput.vue'

export {
  UiInput
}

export default {
  install(app) {
    app.component('UiInput', UiInput)
  }
}