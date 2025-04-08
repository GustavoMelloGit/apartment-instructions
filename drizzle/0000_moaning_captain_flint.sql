CREATE TABLE `guests` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `guests_phone_unique` ON `guests` (`phone`);--> statement-breakpoint
CREATE TABLE `stays` (
	`id` text PRIMARY KEY NOT NULL,
	`guests` integer NOT NULL,
	`guest_id` text NOT NULL,
	`password` text NOT NULL,
	`check_in` text NOT NULL,
	`check_out` text NOT NULL,
	FOREIGN KEY (`guest_id`) REFERENCES `guests`(`id`) ON UPDATE no action ON DELETE no action
);
