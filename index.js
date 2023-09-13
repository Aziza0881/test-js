//     1

let name = prompt()

if (name.charAt(0).toLowerCase() === 'a') {
    alert('проходи')
   //  2
   let num = prompt()
   if ((num % 2) == 0) {
      alert('четная')
   } else {
      alert('нечетная')
   }

   //   3
   let name_len = prompt()
   if ((name_len.length % 2) == 0) {
      alert('проходи')
   } else {
      alert('wrong')
   }

} else {
   alert('wrong')
}