import { watch, type WatchStopHandle } from 'vue'
import { useThemeStore } from '../stores/theme'

/**
 * 根据当前主题返回对应的 Monaco Editor 主题名称
 * @returns Monaco Editor 主题名称
 */
export function getMonacoTheme(): string {
  const themeStore = useThemeStore()
  return themeStore.isDark.value ? 'vs-dark' : 'vs'
}

/**
 * 监听主题变化并更新 Monaco Editor 实例的主题
 * @param editor Monaco Editor 实例
 * @returns 清理函数，用于取消监听
 */
export function watchThemeChange(editor: any): WatchStopHandle {
  const themeStore = useThemeStore()

  // 立即应用当前主题
  const updateTheme = () => {
    const theme = getMonacoTheme()
    if (editor && typeof editor.updateOptions === 'function') {
      editor.updateOptions({ theme })
    }
  }

  // 立即更新主题
  updateTheme()

  // 监听主题变化
  return watch(
    () => themeStore.isDark.value,
    () => {
      updateTheme()
    },
    { immediate: false }
  )
}

/**
 * 为 Diff Editor 监听主题变化
 * @param diffEditor Monaco Diff Editor 实例
 * @returns 清理函数
 */
export function watchThemeChangeForDiffEditor(diffEditor: any): WatchStopHandle {
  const themeStore = useThemeStore()

  const updateTheme = () => {
    const theme = getMonacoTheme()
    if (diffEditor && typeof diffEditor.updateOptions === 'function') {
      diffEditor.updateOptions({ theme })
    }
  }

  // 立即更新主题
  updateTheme()

  // 监听主题变化
  return watch(
    () => themeStore.isDark.value,
    () => {
      updateTheme()
    },
    { immediate: false }
  )
}
