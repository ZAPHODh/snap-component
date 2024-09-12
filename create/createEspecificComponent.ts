import { loadConfig } from '../snap-component.config'
import { createComponentFiles } from './createComponentFile'

export const createEspecificComponent = async (component: string) => {
    const { cssFramework, useStorybook, language, test, outputDir } =
        loadConfig()
    const componentPath = `../src/templates/common/${component.toLowerCase()}/components/${language}/${cssFramework}`
    const stylePath = `../src/templates/common/${component.toLowerCase()}/styles/${cssFramework}/${language}`
    const testPath = `../src/templates/common/${component.toLowerCase()}/tests/${language}/${test}`
    const storyPath = useStorybook
        ? `../src/templates/common/${component.toLowerCase()}/components/stories/${language}`
        : undefined

    await createComponentFiles(component, {
        componentPath,
        stylePath,
        testPath,
        storyPath,
        outputDir,
        language,
        useStorybook,
    })
}
