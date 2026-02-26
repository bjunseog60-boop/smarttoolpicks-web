import { batch3Content } from './guides-content-batch3';
import { batch12Content } from './guides-content-batch12';
import { newGuidesContent } from './guides-content-new';
import { stpPhase4aContent } from './guides-content-stp-phase4a';
import { stpPhase4bContent } from './guides-content-stp-phase4b';

export interface ContentSection {
  heading: string;
  paragraphs: string[];
}

export const guidesContent: Record<string, ContentSection[]> = {
  ...batch12Content,
  ...batch3Content,
  ...newGuidesContent,
  ...stpPhase4aContent,
  ...stpPhase4bContent,
};
