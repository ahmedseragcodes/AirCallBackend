
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('calls').del()
    .then(function () {
      // Inserts seed entries
      return knex('calls').insert([
        {
          call_type: "missed",
          created_at: "2018-04-19T09:38:41.000Z",
          direction: "outbound",
          duration: "120",
          from: "Pierre-Baptiste Béchu",
          id: 7834,
          is_archived: false,
          to: "06 46 62 12 33",
          via: "NYC Office",
          },
          {
          call_type: "missed",
          created_at: "2018-04-18T16:59:48.000Z",
          direction: "outbound",
          duration: "60",
          from: "Jonathan Anguelov",
          id: 7833,
          is_archived: false,
          to: "06 45 13 53 91",
          via: "NYC Office",
          },
          {
          call_type: "answered",
          created_at: "2018-04-18T16:53:22.000Z",
          direction: "inbound",
          duration: "180",
          from: "06 19 18 23 92",
          id: 7832,
          is_archived: false,
          to: "Jonathan Anguelov",
          via: "Support FR",
          },
          {
          call_type: "answered",
          created_at: "2018-04-18T16:42:55.000Z",
          direction: "inbound",
          duration: "180",
          from: "06 34 45 74 34",
          id: 7831,
          is_archived: false,
          to: "Xavier Durand",
          via: "Support FR",
          },
          {
          call_type: "voicemail",
          created_at: "2018-04-18T16:23:43.000Z",
          direction: "inbound",
          duration: "120",
          from: "+33 6 34 45 74 34",
          id: 7830,
          is_archived: false,
          to: null,
          via: "Support FR",
          },
          {
          call_type: "answered",
          created_at: "2018-04-18T15:43:32.000Z",
          direction: "inbound",
          duration: "300",
          from: "+33 6 34 45 74 34",
          id: 7829,
          is_archived: false,
          to: "Olivier Pailhes",
          via: "Spain Hotline",
          },
      ]);
    });
};


/* API Contract 
- **id** - unique ID of call
- **created_at** - creation date
- **direction** - `inbound` or `outbound` call
- **from** - caller's number
- **to** - callee's number
- **via** - Aircall number used for the call
- **duration** - duration of a call (in seconds)
- **is_archived** - call is archived or not
- **call_type** - can be a `missed`, `answered` or `voicemail` call.
*/


/* ALL CALLS 

{
call_type: "missed"
created_at: "2018-04-19T09:38:41.000Z"
direction: "outbound"
duration: "120"
from: "Pierre-Baptiste Béchu"
id: 7834
is_archived: false
to: "06 46 62 12 33"
via: "NYC Office"
},
{
call_type: "missed"
created_at: "2018-04-18T16:59:48.000Z"
direction: "outbound"
duration: "60"
from: "Jonathan Anguelov"
id: 7833
is_archived: false
to: "06 45 13 53 91"
via: "NYC Office"
},
{
call_type: "answered"
created_at: "2018-04-18T16:53:22.000Z"
direction: "inbound"
duration: "180"
from: "06 19 18 23 92"
id: 7832
is_archived: false
to: "Jonathan Anguelov"
via: "Support FR"
},
{
call_type: "answered"
created_at: "2018-04-18T16:42:55.000Z"
direction: "inbound"
duration: "180"
from: "06 34 45 74 34"
id: 7831
is_archived: false
to: "Xavier Durand"
via: "Support FR"
},
{
call_type: "voicemail"
created_at: "2018-04-18T16:23:43.000Z"
direction: "inbound"
duration: "120"
from: "+33 6 34 45 74 34"
id: 7830
is_archived: false
to: null
via: "Support FR"
},
{
call_type: "answered"
created_at: "2018-04-18T15:43:32.000Z"
direction: "inbound"
duration: "300"
from: "+33 6 34 45 74 34"
id: 7829
is_archived: false
to: "Olivier Pailhes"
via: "Spain Hotline"
},

*/