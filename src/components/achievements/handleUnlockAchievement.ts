import { achievementList } from "./achievementList";

type AchievementNames = 'Atareada' | 'Basura' | 'Mejor compañer@';

function handleUnlockAchievement(name: AchievementNames, count: number, unlock_when_count_is: number) {
  let foundAchievement = achievementList.find(goal => goal.name === name);
  console.log(foundAchievement);
  foundAchievement!.unlock = 'unlock';
  console.log(foundAchievement);
}

export default handleUnlockAchievement;
