function reward(){Swal.fire({title:"<strong>您正在为 <u>阿梨</u> 充电</strong>",html:"<b>请选择您的付款方式</b>",icon:"info",showCancelButton:!0,confirmButtonText:'<i class="fa-brands fa-alipay"></i> 支付宝',cancelButtonText:'<i class="fa-brands fa-weixin"></i> 微信支付',confirmButtonColor:"#1677FF",cancelButtonColor:"#2AAE67"}).then((i=>{i.isConfirmed?Swal.fire({title:"感谢您",html:"请打开支付宝 <b>[扫一扫]</b> 以充电",imageUrl:"/img/alipay.jpg",imageWidth:175,imageHeight:175,imageAlt:"Custom image"}).then((i=>{Swal.fire("充电成功","感谢您的支持","success")})):i.dismiss===Swal.DismissReason.cancel&&Swal.fire({title:"感谢您",html:"请打开微信 <b>[扫一扫]</b> 以充电",imageUrl:"/img/wechat.jpg",imageWidth:175,imageHeight:175,imageAlt:"Custom image"}).then((i=>{Swal.fire("充电成功","感谢您的支持","success")}))}))}