import { ProcessCallbackFunction, QueueOptions } from 'bull';

import MailSenderService, { EmailProps } from '../lib/MailSenderService';

const mailSenderService = new MailSenderService();

const handle: ProcessCallbackFunction<EmailProps> = async ({ data }) => {
  await mailSenderService.execute(data);
};

const options: QueueOptions = {
  limiter: {
    max: 60,
    duration: 60 * 1000,
  },
};

export default {
  key: 'EditEmailMail',
  handle,
  options,
};
