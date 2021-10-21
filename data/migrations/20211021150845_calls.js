
exports.up = function(knex) {
  return knex.schema
  .createTable("calls", (tbl)=>{
      tbl.increments("internal_call_id").notNullable().unique()
      tbl.integer("id").notNullable().unique()
      tbl.string("created_at").notNullable()
      tbl.string("direction").notNullable()
      tbl.string("from").notNullable()
      tbl.string("to")
      tbl.string("via").notNullable()
      tbl.string("duration").notNullable()
      tbl.boolean("is_archived").notNullable().defaultTo(false)
      tbl.string("call_type").notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("calls");
};


/* API Contract 
What An Incoming Call Looks Like In Reality:
call_type: "missed",
created_at: "2018-04-19T09:38:41.000Z",
direction: "outbound",
duration: "120",
from: "Pierre-Baptiste Béchu",
id: 7834,
is_archived: false,
to: "06 46 62 12 33",
via: "NYC Office",


Original Structure:
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