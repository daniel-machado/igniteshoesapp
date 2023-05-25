import OneSignal from "react-native-onesignal";

export function tagUserInfoCreate(){
  OneSignal.sendTags({
    'user_name': 'Rodrigo',
    'user_email': 'daniel.machado@gmail.com',
    'phone': '74999157797',
  });
}

export function tagUserEmailCreate(email: string){
  OneSignal.sendTag('user_email', email);

  //deletar uma tag
  //OneSignal.deleteTag('user_email');
  
}

export function tarCartUpdate(itemsCount: string){
  OneSignal.sendTag('cart_items_count', itemsCount)
}