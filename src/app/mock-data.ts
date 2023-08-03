import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import { User } from './models/user';

export class MockData implements InMemoryDbService{
    createDb(reqInfo?: RequestInfo | undefined): {} | Observable<{}> | Promise<{}> {
        const users:User[] = [
            {
                id:1,
                opportunity:'MDM Data Governance',
                photo:'https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg',
                name:'name',
                position:'position',
                address:'address',
                link:'link',
                type:'Fixed Price',
                milestone:['Milestone 1','Mileston 2', 'Milsetone 3'],
                amount:'$1000',
                agepaid:'80%'
            },
            {
                id:1,
                opportunity:'MDM Data Governance',
                photo:'https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg',
                name:'name',
                position:'position',
                address:'address',
                link:'link',
                type:'Fixed Price',
                milestone:['Milestone 1','Mileston 2', 'Milsetone 3'],
                amount:'$1000',
                agepaid:'80%'
            },
            {
                id:1,
                opportunity:'MDM Data Governance',
                photo:'https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg',
                name:'name',
                position:'position',
                address:'address',
                link:'link',
                type:'Fixed Price',
                milestone:['Milestone 1','Mileston 2', 'Milsetone 3'],
                amount:'$1000',
                agepaid:'80%'
            },
            {
                id:1,
                opportunity:'MDM Data Governance',
                photo:'https://t4.ftcdn.net/jpg/02/10/96/95/360_F_210969565_cIHkcrIzRpWNZzq8eaQnYotG4pkHh0P9.jpg',
                name:'name',
                position:'position',
                address:'address',
                link:'link',
                type:'Fixed Price',
                milestone:['Milestone 1','Mileston 2', 'Milsetone 3'],
                amount:'$1000',
                agepaid:'80%'
            },
        ];
        return {users};
    }

}
