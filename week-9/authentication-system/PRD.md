User Schema 
- name 
- email
- password 
- role: USER, ADMIN
- isVerified
- passwordResetToken
- passwordResetExpire
- verificationToken
- createdAt


## Password Reset 
/reset: email 
/reset-password:  token (verify the token from DB)
