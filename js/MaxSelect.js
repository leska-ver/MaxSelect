//Проверка ошибок console.log() 

document.addEventListener('DOMContentLoaded', () => {

  /*1.Select*/
  const defaultSelect = () => {    
    const element = document.querySelector('.default');
    const choices = new Choices(element, {
      searchEnabled: false,/*убирает Ентер*/
      /*работает если отключить searchEnabled: false. будет поиск по селекту*/
      noResultsText: 'Ничего не найдено'
    });

     //Не обязательно aria-label настраивать. Просто улучшил работу aria-label 
    let ariaLabel = element.getAttribute('aria-label');
    element.closest('.choices').setAttribute('aria-label', ariaLabel);

    //Не смогли скрыть первый option в селекте. В css вторая попытка #choices--default-item-choice-1
    // element.choices('.choices').querySelector('#choices--default-item-choice-1').style.display = 'none';

  };

  defaultSelect();
  
  /*2.Select в месте с 3.Select*/
  const multiDefault = () => {
    const elements = document.querySelectorAll('.multi-default');
    elements.forEach(el => {    
      const choices = new Choices(el, {
        searchEnabled: false,/*убирает Ентер*/
        /*работает если отключить searchEnabled: false. будет поиск по селекту*/
        noResultsText: 'Ничего не найдено'
      });
    });  
  }
 
  multiDefault();

  const groupSelect = () => {
    const element = document.querySelector('.group-select');
      const choices = new Choices(element, {
        // searchEnabled: false,убирает Ентер*/
        /*работает если отключить searchEnabled: false. будет поиск по селекту*/
        noResultsText: 'Ничего не найдено'
      }); 
  };
 
  groupSelect();

})   