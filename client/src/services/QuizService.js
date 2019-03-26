import Api from '@/services/Api'

export default {
  indexAbrigo (values) {
    return Api().get('abrigo', {
      params: values
    })
  },
  indexJustica (values) {
    return Api().get('justica', {
      params: values
    })
  },
  indexInfoGeral (values) {
    return Api().get('info-geral', {
      params: values
    })
  }
}

