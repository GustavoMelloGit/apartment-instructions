import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const guests = sqliteTable('guests', {
  id: text('id').primaryKey().notNull(),
  name: text('name').notNull(),
  phone: text('phone').notNull().unique(),
});

export const stays = sqliteTable('stays', {
  id: text('id').primaryKey().notNull(),
  guests: integer('guests').notNull(),
  guest_id: text('guest_id')
    .notNull()
    .references(() => guests.id),
  password: text('password').notNull(),
  check_in: text('check_in').notNull(),
  check_out: text('check_out').notNull(),
});
