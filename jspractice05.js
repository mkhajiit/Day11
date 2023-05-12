let firstname=null;
let lastName=null;
let nickName="바이올렛";

// alert(firstname || lastName || nickName ||"");
// alert(1 && 2 && null && 3); 
// alert(!firstname);
// alert(!!firstname);
alert(firstname ?? lastName ?? nickName ?? "익명의 사용자");