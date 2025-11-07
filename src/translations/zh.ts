import { TranslationKey } from "./translationKey";
import { HAS_RECORDED_SOUND_EFFECTS, HAS_SHORT_TEXTS } from "../env-utils";

export const zhTranslations: Record<TranslationKey, string> = {
  [TranslationKey.START_GAME]: HAS_SHORT_TEXTS ? "开始" : "开始游戏",
  [TranslationKey.NEW_GAME]: "新游戏",
  [TranslationKey.RESTART_GAME]: "再试一次",
  [TranslationKey.RETRIES]: "重试次数",
  [TranslationKey.CONTINUE]: "继续",
  [TranslationKey.DIFFICULTY]: "难度",
  [TranslationKey.MOVES]: "移动次数",
  [TranslationKey.CHOOSER_TITLE]: "接下来你想添加什么？",
  [TranslationKey.CHOICE_TOOL]: "新动作",
  [TranslationKey.CHOICE_RULE]: "新规则",
  [TranslationKey.CHOICE_KITTEN_BEHAVIOR]: "小猫性格",
  [TranslationKey.EXPLANATION_MOONY]: HAS_SHORT_TEXTS ? "会跑向月亮" : "月月喜欢月亮，会努力接近它。",
  [TranslationKey.EXPLANATION_IVY]: HAS_SHORT_TEXTS ? "会绕着树跑" : "艾薇喜欢绕着树跑。",
  [TranslationKey.EXPLANATION_SPLASHY]: HAS_SHORT_TEXTS
    ? "会跑向水"
    : "水水喜欢水，想在里面玩耍。一旦她进入水中，你只能用妈妈的喵喵声引诱她出来。",
  [TranslationKey.EXPLANATION_MEOW]: HAS_SHORT_TEXTS
    ? "吸引小猫靠近"
    : "当妈妈喵喵叫时，所有小猫都会靠近一步。但你每3次移动才能使用一次。",
  [TranslationKey.EXPLANATION_WAIT]: HAS_SHORT_TEXTS ? "什么都不做" : "你可以待在原地，等待小猫移动。",
  [TranslationKey.EXPLANATION_MOVE_LIMIT_1]: HAS_SHORT_TEXTS
    ? "月亮落下后，黑暗降临"
    : "月亮在天空中移动。一旦它落下，黑暗就会降临 - 但你仍然可以完成游戏。",
  [TranslationKey.EXPLANATION_MOVE_LIMIT_2]: "在月亮落下之前让所有小猫团聚！",
  [TranslationKey.EXPLANATION_EMPTY]: HAS_SHORT_TEXTS ? "..." : "你的选择将在这里解释。",
  [TranslationKey.YOUR_CHOICE]: "你的选择",
  [TranslationKey.UNITED]: "团聚了！",
  [TranslationKey.LOST]: "哦不！",
  [TranslationKey.MEOW]: "喵",
  [TranslationKey.WAIT]: "等待",
  [TranslationKey.LOADING]: "加载中...",
  [TranslationKey.HINT]: "提示",
  [TranslationKey.COLLECT_XP]: HAS_SHORT_TEXTS ? "" : "收集 +{0}",
  [TranslationKey.SKIP_TUTORIAL]: HAS_SHORT_TEXTS ? "跳过教程" : "给我全部！我自己能搞定。",
  [TranslationKey.RECORD]: HAS_RECORDED_SOUND_EFFECTS ? "录制喵声" : " ",
  [TranslationKey.DELETE_RECORD]: HAS_RECORDED_SOUND_EFFECTS ? "删除喵声" : " ",
  [TranslationKey.SHARE_LOAD_GAME]: HAS_SHORT_TEXTS ? "分享/加载游戏" : "通过表情符号字符串分享或加载游戏",
};