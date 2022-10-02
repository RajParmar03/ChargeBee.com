import { Box, Flex,Icon,Text } from "@chakra-ui/react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'



export function FooterMenu(){

    return (
        <div style={{'backgroundColor':'lightgray'}}>
            <Flex p={'50px 10px 100px 10px'} justifyContent={'space-evenly'} fontSize={'13px'} lineHeight={'15px'} textAlign={'left'}>
                <Box>
                    <Text fontSize={'18px'} color="blue">Product &gt;</Text>
                    <br />
                    <Text>Subscription Management</Text>
                    <Text>Recurring Billing and Invoicing</Text>
                    <Text>Recurring Payments</Text>
                    <Text>Accounting and Taxes</Text>
                    <Text>SaaS Reporting</Text>
                    <Text>Enterprise Billing</Text>
                    <Text>Integrations</Text>
                </Box>
                <Box>
                    <Text fontSize={'18px'} color="blue">Help & Support &gt;</Text>
                    <br />
                    <Text>Security</Text>
                    <Text>FAQs</Text>
                    <Text>Status</Text>
                    <Text>Product Documentation</Text>
                    <Text>API Documentation</Text>
                    <Text>Supported Payment Gateways</Text>
                    <Text>Sitemap</Text>
                </Box>
                <Box>
                    <Text fontSize={'18px'} color="blue">Resources &gt;</Text>
                    <br />
                    <Text>Blog</Text>
                    <Text>Compare Payment Gateways</Text>
                    <Text>Tackling Payment Failures</Text>
                    <Text>Enterprise Billing Guide</Text>
                    <Text>Webinars</Text>
                    <Text>Events</Text>
                    <Text>Glossaries</Text>
                    <Text>Subscription Academy</Text>
                </Box>
                <Box>
                    <Text fontSize={'18px'} color="blue">Company &gt;</Text>
                    <br />
                    <Text>Customers</Text>
                    <Text>Partners</Text>
                    <Text color={'orange.500'}>Careers</Text>
                    <Text>Press</Text>
                    <Text>Brand Guidelines</Text>
                    <Text>Terms of Service</Text>
                    <Text>Privacy Policy</Text>
                    <br />
                    <br />
                    <Flex justifyContent={'space-evenly'}>
                    <Icon as={FaFacebook} />
                    <Icon as={FaTwitter} />
                    <Icon as={FaYoutube} />
                    <Icon as={FaLinkedin} />
                    </Flex>
                </Box>
            </Flex>
        </div>
    )
}