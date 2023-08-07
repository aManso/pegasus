import { MemberInterface } from "../contracts/member.contracts";

export const MEMBERS_MOCK = {
    members: [
        {
            profilePic: './assets/img/profile-pics/profile1.png',
            name: 'Jenny Wilson',
            alias: '@jnnywlsn',
            joinedDate: new Date(),
            lastActive: '2 hours ago'
        },
        {
            profilePic: './assets/img/profile-pics/profile2.png',
            name: 'Kathryn Murphy',
            alias: '@murphyyy',
            joinedDate: new Date(),
            lastActive: '5 days ago'
        },
        {
            profilePic: './assets/img/profile-pics/profile3.png',
            name: 'Leslie Alexander',
            alias: '@leslie98',
            joinedDate: new Date(),
            lastActive: '4 days ago'
        },
        {
            profilePic: './assets/img/profile-pics/profile4.png',
            name: 'Ralph Edwards',
            alias: '@ralphadator',
            joinedDate: new Date(),
            lastActive: '9 hours ago'
        },
        {
            profilePic: './assets/img/profile-pics/profile5.png',
            name: 'Guy Hawkins',
            alias: '@guyman',
            joinedDate: new Date(),
            lastActive: '2 hours ago'
        },
        {
            profilePic: './assets/img/profile-pics/profile6.png',
            name: 'Wade Warren',
            alias: '@wayyyd',
            joinedDate: new Date(),
            lastActive: '6 hours ago'
        },
        {
            profilePic: './assets/img/profile-pics/profile7.png',
            name: 'Kristin Watson',
            alias: '@kristinwtsn',
            joinedDate: new Date(),
            lastActive: '5 days ago'
        }
    ] as MemberInterface[]
}