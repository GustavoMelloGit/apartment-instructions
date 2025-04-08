CREATE TABLE IF NOT EXISTS `guests` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS `guests_email_unique` ON `guests` (`email`);--> statement-breakpoint
CREATE TABLE IF NOT EXISTS `stays` (
	`id` text PRIMARY KEY NOT NULL,
	`guests` integer NOT NULL,
	`guest_id` text NOT NULL,
	`password` text DEFAULT '' NOT NULL,
	`check_in` text NOT NULL,
	`check_out` text NOT NULL,
	FOREIGN KEY (`guest_id`) REFERENCES `guests`(`id`) ON UPDATE no action ON DELETE no action
);
