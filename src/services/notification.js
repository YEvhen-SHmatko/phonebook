import PNotify from 'pnotify/dist/es/PNotify';

const notification = name => {
  const message = `${name} is already is contacts`;
  PNotify.error({
    text: message,
    animate: {
      animate: true,
      in_class: 'bounceInDown',
      out_class: 'bounceOutUp',
    },
    animate_speed: 250,
    delay: 3000,
  });
};
export default notification;
