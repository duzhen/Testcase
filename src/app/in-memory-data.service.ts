import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const testcase = [
      { id: 'partner', name: 'Partner' },
      { id: 'client', name: 'Client' },
      { id: 'professional', name: 'Professional' },
      { id: 'login-user', name: 'Login User' },
      { id: 'employee', name: 'Employee' },
      { id: 'customer-review', name: 'Customer Review' },
      { id: 'department', name: 'Department' },
      { id: 'proregistration-request', name: 'Proregistration Request' },
      { id: 'chat-channel', name: 'Chat Channel' },
      { id: 'cschat-topics', name: 'CSChat Topics' },
      { id: 'chat-message', name: 'Chat Message' },
      { id: 'job-category', name: 'Job Category' },
      { id: 'fixd-case', name: 'Fixd Case' },
      { id: 'fixd-quotation', name: 'Fixd Quotation' }
    ];

    // id: number;
    // phone: string;
    // area_code: string;
    // first_name: string;
    // last_name: string;
    // photo_id: string;
    const partner = [
      { id: 1, phone: '416-123-4567', area_code: '1', first_name: '', last_name: '', photo_id: '' },
      { id: 2, phone: '647-123-4567', area_code: '1', first_name: '', last_name: '', photo_id: '' },
      { id: 3, phone: '289-123-4567', area_code: '1', first_name: '', last_name: '', photo_id: '' },
      { id: 4, phone: '647-000-1234', area_code: '1', first_name: 'Olivia', last_name: 'Smith', photo_id: '' },
      { id: 5, phone: '416-321-4567', area_code: '1', first_name: 'Jason', last_name: 'Chen', photo_id: '' },
      { id: 6, phone: '905-123-4567', area_code: '1', first_name: 'Henry', last_name: 'Zhang', photo_id: '' },
      { id: 7, phone: '416-000-1234', area_code: '1', first_name: 'Peter', last_name: 'Wang', photo_id: '' },
      { id: 8, phone: '416-567-6789', area_code: '1', first_name: 'Eric', last_name: 'Wong', photo_id: '' },
      { id: 9, phone: '647-567-6789', area_code: '1', first_name: 'Frank', last_name: 'Zhou', photo_id: '' },
      { id: 10, phone: '289-567-6789', area_code: '1', first_name: 'Cindy', last_name: 'Liu', photo_id: '' },
      { id: 11, phone: '905-567-6789', area_code: '1', first_name: 'Andrew', last_name: 'Chen', photo_id: '' },
      { id: 12, phone: '647-321-5678', area_code: '1', first_name: 'Brian', last_name: 'Ma', photo_id: '' },
      { id: 13, phone: '289-321-5678', area_code: '1', first_name: 'David', last_name: 'Lin', photo_id: '' },
      { id: 14, phone: '416-000-1357', area_code: '1', first_name: 'Andy', last_name: 'Liu', photo_id: '' },
      { id: 15, phone: '416-000-2468', area_code: '1', first_name: 'Mary', last_name: 'Ma', photo_id: '' },
      { id: 16, phone: '416-000-3579', area_code: '1', first_name: 'Cathy', last_name: 'Wu', photo_id: '' }
    ];

    const client = [
      { id: 1, partner_id: 1, avatar: true, display_name:'张三', cover_image: true, email:'san.zhang@ethoughtware.com', created_date:'2017-07-18  10:00:00 AM', active:'', reactivate:'' },
      { id: 2, partner_id: 2, avatar: false, display_name:'李四', cover_image: false, email:'', created_date:'2017-07-19  10:00:00 AM', active:'-', reactivate:'-' },
      { id: 3, partner_id: 3, avatar: true, display_name:'John Walter', cover_image: true, email:'john.walter@ethoughtware.com', created_date:'2017-07-20  10:00:00 AM', active:'-', reactivate:'-' },
      { id: 4, partner_id: 4, avatar: true, display_name:'Olivia Smith', cover_image: false, email:'olivia.smith@ethoughtware.com', created_date:'2017-07-21  10:00:00 AM', active:'-', reactivate:'ABC888' },
      { id: 5, partner_id: 5, avatar: true, display_name:'Jason Chen', cover_image: false, email:'jason.chenr@ethoughtware.com', created_date:'2017-07-22  10:00:00 AM', active:'', reactivate:'' },
      { id: 6, partner_id: 6, avatar: true, display_name:'Henry Zhang', cover_image: false, email:'henry.zhang@ethoughtware.com', created_date:'2017-07-23  10:00:00 AM', active:'-', reactivate:'-' },
      { id: 7, partner_id: 7, avatar: true, display_name:'Peter Wang', cover_image: false, email:'peter.wang@ethoughtware.com', created_date:'2017-07-24  10:00:00 AM', active:'-', reactivate:'-' },
      { id: 8, partner_id: 8, avatar: true, display_name:'Andrew Chen', cover_image: false, email:'andrew.chen@ethoughtware.com', created_date:'2017-07-25  10:00:00 AM', active:'-', reactivate:'-' }
    ];

    return {testcase, partner, client};
  }
}
