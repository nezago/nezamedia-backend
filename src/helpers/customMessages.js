export default {
  landingPageMessages: {
    welcomeMessage: 'Welcome to NezaMedia, we make your life easier by saving, editing and securing your Videos, Audios, and documents.',
    whatWedo: `
    1. Save your videos, audios, and documents here.
    2. Access a great number of films of any kind
    3. Secure your digital property 
    `,
  },
  errorMessages: {
    firstnameErr: 'First name should be text, without spaces, no special characters, and no numbers and should not be empty',
    lastnameErr: 'First name should be text, without spaces, no special characters, and no numbers and should not be empty',
    usernameErr: 'Username should be text, without spaces, no special characters, and no numbers, and no more than 50 characters and should not be empty',
    passwordErr: 'Password should not be empty, made of letters, atleast on capital letter, atleast on number, and atleast on special character',
    ageErr: 'Age should be a number specifying your year of birth eg:1999',
    emailErr: 'Email should not be empty, and valid email address',
    sexErr: 'Sex should be male or female',
    countryErr: 'Country name should not be empty, should be a plain text no numbers, no special characters',
    cityErr: 'City name should not be empty, should be a plain text no numbers, no special characters',
    emailEmptyErr: 'Enter your email please',
    passwordEmptyErr: 'Enter your password please',
    userExistErr: 'Sorry! the email, or username you entered already exists',
    tokenEmptyErr: 'Enter the token please',
    userNotFound: 'This user does not exists, please signup instead',
    userAlreadyVerified: 'You are already verified, Login instead',
    userAlreadyVerifiedWhileAskedForLinkResend: 'You are already verified, Login instead, or if you have forgotten your credentials, request for password reset',
    unkownCredentials: 'Your credentials do not match',
    unVerifiedAccount: 'Your account is not verified yet, please check your email as soon as possible to verify it',
    emailOrUsernameRequired: 'Enter your email or your username',
    resetPasswordLinkExpired: 'The reset password link has been expired, please re-request for password reset',
    tokenMissingOrInvalidErrorMsg: 'You are not authenticated, please login or signup',
  },
  successMessages: {
    signupSuccess: `Conglaturations, we are happy that you became a member of this global community,
     We have just sent you an email which contains a verification link, your account will be valuable 
     after you click on that link. Enjoy to navigate through NezaMedia`,
    emailVerificationSuccess: `
    Hooray! 
    
    You have succeesfully verified your account, start enjoy alot with us.

    With us you will be able to get access to: 
    * Various video Songs
    * Various movies
    * Audio songs
    * Comic videos
    * Books 
    * And secure your digital properties
    * 
    * Login and enjoy using our services
     `,
    verificationEmailResentSuccess: 'Hooray! We have just re-sent you the verification email, please check your email and verify your account',
    passwordResetRequestEmailSent: 'We have just sent you an email containing you password reset link, check it and click the link, that link is valid for 24 hours',
    passwordResetSuccess: 'Hooray! Your password has been successfully changed, please check your email and follow the instructions',
  },
  verificationEmail: {
    subject: 'Account verification',
    intro: 'Thank you for joing us today, you life is going to change in a positive way!',
    instructions: 'To be able start using our services and favor, please click the button below to verify your account',
    buttonText: 'Verify your account',
    buttonColor: '#00A799',
    outro: 'If something is not clear, please do not hesitate to hit reply to this email, we would like to help you!',
  },
  passwordResetRequestEmail: {
    subject: 'Password reset request',
    intro: 'You have just requested to reset your password,',
    instructions: 'Click the button below to reset your password, the link is valid for 24 hours since the time you received it',
    buttonText: 'Reset your passwordt',
    buttonColor: '#FF585B',
    outro: 'If you think this email is sent by mistake, do not hesitate to hit reply, and give us feedback',
  },
  passwordResetSuccessEmail: {
    subject: 'Password reset success!',
    intro: 'Your password has been successfully changed,',
    instructions: 'Click the button below to login with your new password,',
    buttonText: 'Login',
    buttonColor: '#7268A6',
    outro: 'If you think this email is sent by mistake, do not hesitate to hit reply, and give us feedback',
  },
};
