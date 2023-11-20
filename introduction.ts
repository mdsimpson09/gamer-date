Gamer Date 
__________________________
Capstone: Project Proposal 

Goal: 
The primary goal of this application, Gamer Date, is to:

Help Players establish an identity in the gaming world
	Players will build their individual profiles with the player’s first and last name, email 			address, general geographic location, preferred language, preferred pronouns, top 5 			games, and preferred gaming device. Players will be able to choose to attach their discord 	and social media profile links. 

Connect Players from anywhere in the world:
	Each player profile will be set with the individual’s gaming, geographical, and language 			preferences, which will pull up other player profiles in the system with similar 				preferences, and players will be able to “like” or “pass” each profile with the click of a 			button. If both players, “like” each other, they will “match” and be given the option to 			message each other to establish a relationship and/or connect to game together. 

	Each player will be responsible for connecting to game outside of the app in the way that 			they find appropriate. 

Build communities and allow Players find others that enjoy the same games in a safe and supportive environment
	In the last several years, people have reported significant increases in loneliness and 			struggles to connect with others. In the world of gaming, it can be a struggle to meet 			other people who enjoy gaming or who enjoy the same styles of games. For women, it 			can be especially difficult to meet others, in a safe way. 

	This app will also have an option to “report” profiles for review if another player feels 			like they have violated safety and community standards. These player profiles will be 			reviewed by the site operators and will be temporarily blocked from interacting with 			other profiles until reviewed. These profiles may be deleted at the discretion of the site 			managers. Players will also have the option to click to “unmatch” profiles and/or to click 			to “block” profiles. After someone is blocked, they will no longer see that other person’s 			profile and will not have the option to reach out to them. 




User Demographic:
	Gamer Date is specifically designed for all gamers, which is a very diverse demographic. The application will present in english, but there are goals to allow for translation options in future deployments. 

	Gamer Date is ideal for individuals looking to meet others to game and connect with, 			with the hopes of eventually developing small groups of friends. For example, some 			games allow for groups of 2-4 to play together, so players may initially match with one 			player, but may find themselves then playing in group games with the person they 			matched with, thus meeting other groups of people who share similar interests. 

API/Data Information:Gaming data and genre information will be sourced from igdb.com/api
	Players will be able to click on an “explore games” link in the navbar that takes players to 	another page to explore and search for new game ideas by selecting a gaming 				genre and preferred device

	The app will also provide a random game suggestion for “matched” players based on 			similarities in the player’s genre and gaming device preferences. This will be viewable 			with the “you’ve matched” alert

Player Data:
	Will be stored in a local database and will be viewable on the player’s profile. 

	Player Data will include: 
		1. Player’s first and last name (only first name will be available on the individual 				profile), email, age, preferred language, and preferred pronouns, geographic 				location through zip code 
		2. Player’s gaming preferences (RPG, first-person shooter, etc), top 5 favorite 				games, preferred gaming devices, preferred geographic distance, and preferred 				pronouns of those they are matched with (for example, some women may only 				want to be matched with other women)
			-Preferences for gaming genres, preferred devices, and gender pronouns 					will be shown in a radio button format for players 
			- Geographic preferences will be shown in single option format with 					options of 10mi radius, 25 mi radius, 50 mi radius, and “any”
			- Age preferences will be shown in single option format with options of 					“exact age as me,” “up to 5 years older/younger,” “up to 10 years older/					younger,” and “any” 
			- Players will type in their top 5 favorite games	
		3. “liked” profiles will be stored in the user’s “liked profiles” information in the 				database and will be used to match with other profiles that like the original user’s 				account. Player A’s username must be stored in the database in Player B’s “liked 				profiles” information and Player B’s profile must also be listed in Player A’s 				“liked profiles” information before a match will be triggered 

Matching Process: 
	Players will be shown other profiles with at least 50% of similar interests based on 			geographic location, preferred style of games, top 5 games, and preferred gaming device, 			preferred pronouns
	
	Players will only be shown other profiles in the preferred geographic location, age 			preferences,  and preferred pronouns  with other variations allowed in genre and gaming 			devices 

	When looking through other profiles, players will be shown one profile at a time and will 			be able to scroll through the provided information. A green button will be available at the 			bottom right of that profile page that says “like” and a red button at the bottom left of the 			page will be a “dislike” button. When a player clicks on the dislike button, the profile will 	shoot left and will be replaced with another profile and will be filed in the original 			player’s data as “disliked” and will not be shown that profile again. If a player clicks 			“like” the profile will shoot right and will be saved in the original player’s data as a 			“liked” account, which will allow a potential match in the future if that player then 			“likes” the original player’s profile, so each player will be listed in their “liked” accounts 			in the user’s database .

	When a player matches, the page will alert the players of a match by showing both profile 	pictures and say “you’ve matched!” and will also show a “suggested game” from the 			IGDB.com/API.  Each player will have an option to click on a “chat now” button which 			will take them directly to the chat page and an option to “chat later” which will allow the 			player to keep scrolling through other profiles

User Flow: 
	Users will register their account and authenticate 
	Upload at least 1 photo and fill in preferred profile information 
	Be given the option to connect social media 
	Begin clicking through other similar profiles 
	When a “match” happens, players will be alerted 
	Players will see their “matches” when clicking the “matches” link in the navigation bar 
	Players will then be able to click through their matches and begin chatting 

Navigation Bar will be available on each page and will have links to: 
	Player profile where players can view their own profile. There will be options on this 			page to edit profile and information, and to delete profile 
	Find a Date - will take players to the page where they can like or dislike profiles one at a 			time
	Matches - will take players to a page that lists their “matches” and will show 				alerts by the player profile icon if there is an unread message. Clicking these 				profile icons will redirect to the chat with that specific player 
	Chat - will show players a list of active chats with other players 
	Explore Games- will direct players to a page generated by igdb.com/api and will 				allow players to filter games based on genre of games and preferred device to 				populate a list of suggested games for them to explore 
	Community Guidelines - will show the community rules page

Community Standards page 
	
	The sole purpose is to build communities and meet friends, not to search for 				romantic partners or sexual relationships 

	Just be genuinely you. Don’t create a fake account or pretend to be someone 				you’re not, even if it’s just for fun.

	Communicate Respectfully. Talking to new people can be tricky. Respect goes 				long way.
	Consider boundaries. Comfort levels vary person to person. We don’t allow 				nudity, sexual content, sexual desires, or looking for sex on your public profile. If 				you are in a private conversation, these are okay if everyone is okay with it. 				Consent matters.

	Share cautiously and thoughtfully. Don’t publicly broadcast your personal 					information or ways for people to connect with you (no public displays of things 				like phone numbers, emails, or social handles). Don’t ask others to send you 				their personal details either.
	We aim to promote positivity and won’t tolerate any sort of violent content that 				contains gore, death, images or descriptions of violent acts (against humans or 				animals), use of weapons, and anything advocating for or glorifying self-harm.
	Make personal connections, not business ones. Don’t advertise, promote, share 				your social handles to only gain followers, sell stuff, fundraise, or campaign. 
	This is not a place to advertise for sex work. 
	Harassment, threats, bullying, intimidation, extortion, blackmail, or 					anything intentionally done to cause harm is not allowed.
	Gamer Date is not a place for hate. We will never stand behind racism, bigotry, 				hatred, or violence based on who someone is, how they identify or what they 				look like. This includes (but not limited to) someone’s race, ethnicity, religious 				affiliation, disability, physicality, gender, gender identity, age, national origin, or 				sexual orientation. If you see someone who doesn't meet your personal criteria, 				don't “like” them or “unmatch” and move on.
	Adults only. You must be 18 years of age or older to use Gamer Date. This also 				means we don’t allow photos of unaccompanied or unclothed minors, including 				photos of your younger self–no matter how adorable you were back then.
	Abide by the law. No illegal content or activities are allowed, ever. This means 				you can’t use Gamer date to buy or sell drugs or counterfeit goods, or ask for 				assistance to help you break the law. We definitely won’t tolerate anyone using 				Gamer Date to advocate or participate in any sort of harm involving minors or 				human trafficking.
	One account per person. Each account can only have one owner. 
	This is your space, post your own content. Don’t post images or private 					messages from other people unless you’ve been given consent to do so. Don’t 				post work that’s copyrighted or trademarked.
	Don’t abuse Gamer Date and don’t use it to spread false or misleading info. 				Don’t spam harmful links or unsolicited content. Don’t create mass 					accounts. Don’t use the app to manipulate, con, or get people to send you 					money or anything else. Don’t submit misleading reports. Don’t use third-party 				apps to unlock features or game the system.
Reporting
As a member of the Gamer Date community, we encourage you to speak up and speak out. If someone is causing you harm, making you feel uncomfortable, or is violating our Community Guidelines, please report it. Your report is always confidential.
Impact
We take our Community Guidelines and the impact they have on our community seriously. We’ll do everything we can to make sure people follow them. 
We reserve the right to investigate and/or terminate accounts if we find you have misused the Service or behaved in a way Gamer Date deems inappropriate, unlawful, or in violation of our Community Guidelines or Terms of Use, including actions or communications that occur off the Service but involve others you meet through the Service.

	








Women in gaming app / Gaming companion app / Gamer Date / Game Play 
	1. Sort of set up like dating apps 
	2. Each user will have their own profile
		- name, email address, age, preferred language, gender identity 
		- will have individual preferences for gaming experience like age, preferred 				language, timezone choices, gender identity  
	3. Finding other people to game with
		- finding people that play on the same consoles
			- same game, but cross-console gaming 
		- finding people that like the same genre 
	4. ways to link outside profiles like discord for voice chatting options
	5. Able to be used on phone or computer 


