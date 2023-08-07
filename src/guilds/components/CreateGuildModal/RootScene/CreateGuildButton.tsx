import ArrowRight from '@/guilds/assets/arrow-right.svg';
import CreateGuild from '@/guilds/assets/create-guild.svg';

type CreateGuildButtonProps = Readonly<{
	onClick?: () => void;
}>;

export const CreateGuildButton = ({ onClick }: CreateGuildButtonProps) => (
	<button
		onClick={onClick}
		className="mt-4 flex h-16 w-full items-center gap-x-2 rounded-lg border border-background-modifier-accent px-4 hover:bg-background-modifier-hover active:bg-background-modifier-active"
	>
		<CreateGuild />
		<p className="font-bold text-text-normal">Create My Own</p>
		<ArrowRight className="ml-auto" />
	</button>
);
