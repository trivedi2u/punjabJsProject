"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFunctionExpression = exports.isReturnStatement = exports.isProperty = exports.isObjectPattern = exports.isObjectExpression = exports.isNewExpression = exports.isMemberExpression = exports.isLiteral = exports.isJSXAttribute = exports.isImportSpecifier = exports.isImportNamespaceSpecifier = exports.isImportDefaultSpecifier = exports.isImportDeclaration = exports.isSequenceExpression = exports.isAssignmentExpression = exports.isVariableDeclaration = exports.isExpressionStatement = exports.isCallExpression = exports.isBlockStatement = exports.isArrowFunctionExpression = exports.isArrayExpression = void 0;
const experimental_utils_1 = require("@typescript-eslint/experimental-utils");
const isNodeOfType = (nodeType) => (node) => (node === null || node === void 0 ? void 0 : node.type) === nodeType;
exports.isArrayExpression = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.ArrayExpression);
exports.isArrowFunctionExpression = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.ArrowFunctionExpression);
exports.isBlockStatement = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.BlockStatement);
exports.isCallExpression = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.CallExpression);
exports.isExpressionStatement = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.ExpressionStatement);
exports.isVariableDeclaration = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.VariableDeclaration);
exports.isAssignmentExpression = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.AssignmentExpression);
exports.isSequenceExpression = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.SequenceExpression);
exports.isImportDeclaration = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.ImportDeclaration);
exports.isImportDefaultSpecifier = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.ImportDefaultSpecifier);
exports.isImportNamespaceSpecifier = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.ImportNamespaceSpecifier);
exports.isImportSpecifier = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.ImportSpecifier);
exports.isJSXAttribute = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.JSXAttribute);
exports.isLiteral = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.Literal);
exports.isMemberExpression = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.MemberExpression);
exports.isNewExpression = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.NewExpression);
exports.isObjectExpression = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.ObjectExpression);
exports.isObjectPattern = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.ObjectPattern);
exports.isProperty = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.Property);
exports.isReturnStatement = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.ReturnStatement);
exports.isFunctionExpression = isNodeOfType(experimental_utils_1.AST_NODE_TYPES.FunctionExpression);
