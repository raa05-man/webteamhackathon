<<<<<<< HEAD
# hello this is my first next.js project

# I HAVE CREATED THE THIRD PROBLEM STATEMENT OF HACKATHON
    SOCIETY MANAGEMENT SYSTEM OF GOKULDHAM SOCIETY 
   
       
       
       //**                                       HERE IS THE PURPOSE OF OUR WEBSITE                                                    **//


     Create a full-stack web application for residential societies that streamlines complaint management. Residents report issues with photo evidence, maintenance staff assigns tasks to specialized workers, and QR-based verification ensures accountability. Employees earn token rewards for resolved complaints.

       🎯 Core Requirements

    1. Multi-Role Ecosystem
      ●	Residents
       ○	Login/register (flat number, contact).
       ○	Launch complaints: Category (plumbing/electrical/etc.), description, photo upload.
       ○	Receive unique complaint code + QR code upon submission.
       ●	Maintenance Managers
       ○	Dashboard: View new complaints, assign to workers by specialization.
       ○	Set priority (High/Medium/Low) based on issue type.
       ●	Workers
       ○	Receive assigned complaints (with priority ranking).
       ○	Mark complaints as "In Progress"/"Completed."
       ○	Scan resident’s QR code to verify resolution.
    2. Complaint Lifecycle Workflow
       ●	Resident Submission:
       ○	Photo upload with issue description → Auto-generate complaint ID (e.g., COMP-7B3A) + QR code.
       ●	Manager Assignment:
       ○	assign workers by trade (electrician, plumber, etc.).
       ○	Priority rules (e.g., "Electrical fault = High").
       ●	Worker Verification:
       ○	QR scan at resident’s flat → Auto-mark as resolved + timestamp.
    3. Token Reward System
       ●	Workers earn tokens per resolved complaint:
       ○	High Priority = 5 tokens, Medium = 3, Low = 1.
       ●	Token dashboard: View balance, redeem rewards (e.g., "100 tokens = ₹500 voucher").
   4. Real-Time Tracking
       ●	Resident View: Complaint status (Submitted → Assigned → Resolved).
       ●	Manager Dashboard:
       ○	Worker load analytics (e.g., "Electrician: 5 pending tasks").
       ○	Resolution time reports.







     //**                                           HERE BELOW IS THE WORK FLOW OF OUR WEBSSITE                                               **//

      First User land on our landing page and there we have given a enter button to enter our home page .
      
      in home page i have basically made a page with reveiw from our society member and some other thing about our society management system and in home page i have given four option to navigate four part of our  website .
      i) User , means society member , can signup with their flat number as flat number is unique and user can create its own password so they can further login with flat number and that password ,
      ii) if user is already signed up then they can login and redirect to /resident/home .
      iii)it is for worker who is working in that society .
      iv)it is for manager dashboard who is assigning work .

        Authentication to manager and worker is not given and every one can see their dashboard .

        Now coming to /resident/home in which there is option for user to register a new complaint and if user click on new complaint it gets redirected to /complaint/new_complaint in which he can register a new complaint with their flat number and image and description about their problem  after registeration of that problem , the user get a qr code and he/she can also  get a unique id as a flat number
        and user is redirected to /resident/home .
       
        now problem registered by user went to manager's dashboard and now manager can assign work to worker according to the basis of priority level.
        1)mantainance-highest priority -if he completed work then he get 20xp 
        2)electrical-lower than maintainance-if he completed work then he get 15xp 
        3)plumbing-lower than electrical-if he completed work then he get 10xp 
        4)furniture-lower than plumbing -if he completed work then he get 5xp 

        in worker dashboard there is four worker like on their piority level if they complete work it can increase it xp.xp is equivalent to money






        ///***                                                 SETUP INSSTRUCTION OF OUR WEBSITE                                           ***///

          ** adding next.js environment
          npx create-next-app@latest hackathonwebteam
          

          **SET UP FOR MATERIAL UI
              npm install @mui/material @emotion/react @emotion/styled 
              npm install @mui/material @mui/styled-engine-sc styled-components
              npm install @fontsource/roboto
              FOR ICON-npm install @mui/icons-material

          ** SETUPINSTRUCTION FOR PRISMA AND SQLITE PLEASE FOLLOW BELOW INSTRUCTION LINE BY LINE 
              RUN THE COMMAND IN TERMINAL

                npm install prisma -D
                npx prisma init --datasource-provider sqlite
                in schema.prisma file update the url with "file:app.db"
                in gitignore file add #database below it /prisma/app.db
                in schema.prisma model is there
                npx prisma migrate dev--name init
                add a file in src prisma.ts
                after adding model run the command
                npx prisma format
                npx prisma generate
                npx prisma db push

            ** set up for qr code 
            ** npm install react-qr-code .
=======
# webteamhackathon
A Hackathon Conducted by Webteam .
>>>>>>> 1c0d251b3c899e90b09ce5c0016d4730fbf2026e
