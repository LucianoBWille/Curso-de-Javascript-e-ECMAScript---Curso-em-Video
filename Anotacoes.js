function display_yes_no(id) {
  if (document.querySelector('div#'+id).style.display == ""){
    document.querySelector('div#'+id).style.display = "none"
    document.querySelector('button#'+id).innerHTML = '+'
  }else{
    document.querySelector('div#'+id).style.display = ""
    document.querySelector('button#'+id).innerHTML = '-'
  }
}
