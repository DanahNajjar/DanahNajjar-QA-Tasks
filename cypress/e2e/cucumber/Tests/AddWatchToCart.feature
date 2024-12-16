Feature: Add Watches With Price > 55 To Cat 
Scenario: Add Watches With Price > 55 To Cat 
Given The User Navigate to Magento Website
When Cick On Gear Menu and choose watches option 
And Add All Watches With Price > 55 to cart
Then The Cart Should Contain The Correct Numbers of Watches