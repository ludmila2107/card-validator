export default function checkPayment(card) {
    const mir = new RegExp('^220(0|4)[0-9]{12}[0-9]*$');
    const visa = new RegExp('^4[0-9]{12}(?:[0-9]{3})?$');
    const mastercard = new RegExp('^5[1-5][0-9]{14}$');
    const mastercard2 = new RegExp('^2[2-7][0-9]{14}$');
    const amex = new RegExp('^3[47][0-9]{13}$');
    const diners = new RegExp('^3[0689][0-9]{12}[0-9]*$');
    const jcb = new RegExp('^35[0-9]{14}[0-9]*$');
  
    if (mir.test(card)) {
      return 'mir';
    }
    if (visa.test(card)) {
      return 'visa';
    }
    if (mastercard.test(card) || mastercard2.test(card)) {
      return 'mastercard';
    }
    if (amex.test(card)) {
      return 'amex';
    }
    if (diners.test(card)) {
      return 'diners';
    }
    if (jcb.test(card)) {
      return 'jcb';
    }
    return undefined;
}