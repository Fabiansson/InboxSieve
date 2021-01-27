# InboxSieve
<span style="color:red">*NOTE: THIS APP IS NO LONGER ONLINE SINCE MAILGUN CHANGED ITS FREE API SERVICES*</span>.


## What is InboxSieve?

InboxSieve is a completely new way of organizing and privatizing your personal Email-Adress. This service enables full control over your private inbox and gives you the option to hide your personal Email address behind your InboxSieve email address. You can controll and receive a unlimited amount of emails completely for free. With InboxSieve Pro you even get your own InboxSieve Subdomain so you can create unlimited amounts of email addresses instantly!

## How does InboxSieve work?

Each person who signs up to InboxSieve receives his own InboxSieve Email Address. Your personal and private email address hides behind your InboxSieve address. This means each message you recive to your InboxSieve address is forwarded to your private one. InboxSieve offers you full controll over who can send you messages or not. On your Dashboard you have the option to disable each individual source from sending you emails.

## Used Technologies
- [React.js](https://facebook.github.io/react/)
- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Socket.IO](https://socket.io/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- [Mailgun](https://www.mailgun.com/) with [mailgun-js](https://github.com/mailgun/mailgun-js)
- [FirabaseAuth](https://firebase.google.com/docs/auth)
- [Dokku](http://dokku.viewdocs.io/dokku/)

## Deployment
The application was deployed on a private Server with the help of Dokku. Installation of Dokku should be made according to the Dokku Docs.

> Creating A Dokku Container:
```
# on the Dokku host
dokku apps:create inboxsieve
```

> Pushing to the Container:
```
# from your local/development machine
# the remote username *must* be dokku or pushes will fail
git remote add dokku dokku@dokku.me:inboxsieve
git push dokku main:master
```
> Dokku will then run the specified postbuild-script in the `package.json`.

## Preview

<p float="left">
  <img src="https://i.postimg.cc/HknknMwW/Screenshot-2021-01-27-Inbox-Sieve-2.png" width="400" /> 
  <img src="https://i.postimg.cc/MpLKQG57/Screenshot-2021-01-27-Inbox-Sieve.png" width="400" />
</p>

## License

MIT license, copyright (c) 2021 Fabian Zbinden
