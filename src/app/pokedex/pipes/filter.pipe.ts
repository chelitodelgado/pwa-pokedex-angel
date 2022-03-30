import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], filtro: string, claves: string[]): any[] {
    if (!items) return [];
    if (!filtro) return items;
    let filtro_array: string[] = filtro.toString().toLowerCase().split(' ')

    items = items.filter(item => {
      let concatenados: string = ''
      let result: boolean = true
      for (let clave of claves) {
        if (clave.includes(".")) {
          let _clave = clave.split(".")
          let subclave = _clave[1]
          clave = _clave[0]
          concatenados += (item[clave][subclave] || '').toString().toLowerCase()
        } else {
          concatenados += (item[clave] || '').toString().toLowerCase()
        }
      }
      filtro_array.map(val => {
        val = val.toLowerCase()
        result = result && concatenados.includes(val)
      })
      return result
    })
    return items
  }
}
