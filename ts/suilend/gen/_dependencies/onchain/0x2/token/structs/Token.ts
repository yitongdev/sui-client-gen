import {
  PhantomReified,
  PhantomToTypeStr,
  PhantomTypeArgument,
  Reified,
  StructClass,
  ToField,
  ToPhantomTypeArgument,
  ToTypeStr,
  assertFieldsWithTypesArgsMatch,
  assertReifiedTypeArgsMatch,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  extractType,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../../../_framework/util.js";
import { Balance } from "../../balance/structs/index.js";
import { PKG_V35 } from "../../constants.js";
import { UID } from "../../object/structs/index.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isToken(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V35}::token::Token` + "<");
}

export interface TokenFields<T0 extends PhantomTypeArgument> {
  id: ToField<UID>;
  balance: ToField<Balance<T0>>;
}

export type TokenReified<T0 extends PhantomTypeArgument> = Reified<Token<T0>, TokenFields<T0>>;

/**
 * Move struct: `Token`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::token`
 *
 * @typeParam T0 - Type parameter 0 (phantom)
 */
export class Token<T0 extends PhantomTypeArgument> implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::token::Token`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = Token.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::token::Token<${PhantomToTypeStr<T0>}>`;
  readonly $typeArgs: [PhantomToTypeStr<T0>];
  readonly $isPhantom = Token.$isPhantom;

  readonly id: ToField<UID>;
  readonly balance: ToField<Balance<T0>>;

  private constructor(typeArgs: [PhantomToTypeStr<T0>], fields: TokenFields<T0>) {
    this.$fullTypeName = composeSuiType(
      Token.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::token::Token<${PhantomToTypeStr<T0>}>`;
    this.$typeArgs = typeArgs;

    this.id = fields.id;
    this.balance = fields.balance;
  }

  static reified<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): TokenReified<ToPhantomTypeArgument<T0>> {
    return {
      typeName: Token.$typeName,
      fullTypeName: composeSuiType(
        Token.$typeName,
        ...[extractType(T0)],
      ) as `${typeof PKG_V35}::token::Token<${PhantomToTypeStr<ToPhantomTypeArgument<T0>>}>`,
      typeArgs: [extractType(T0)] as [PhantomToTypeStr<ToPhantomTypeArgument<T0>>],
      isPhantom: Token.$isPhantom,
      reifiedTypeArgs: [T0],
      fromFields: (fields: Record<string, any>) => Token.fromFields(T0, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => Token.fromFieldsWithTypes(T0, item),
      fromBcs: (data: Uint8Array) => Token.fromBcs(T0, data),
      bcs: Token.bcs,
      fromJSONField: (field: any) => Token.fromJSONField(T0, field),
      fromJSON: (json: Record<string, any>) => Token.fromJSON(T0, json),
      fromSuiParsedData: (content: SuiParsedData) => Token.fromSuiParsedData(T0, content),
      fromSuiObjectData: (content: SuiObjectData) => Token.fromSuiObjectData(T0, content),
      fetch: async (client: SuiClient, id: string) => Token.fetch(client, T0, id),
      new: (fields: TokenFields<ToPhantomTypeArgument<T0>>) => {
        return new Token([extractType(T0)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return Token.reified;
  }

  static phantom<T0 extends PhantomReified<PhantomTypeArgument>>(
    T0: T0,
  ): PhantomReified<ToTypeStr<Token<ToPhantomTypeArgument<T0>>>> {
    return phantom(Token.reified(T0));
  }
  static get p() {
    return Token.phantom;
  }

  static get bcs() {
    return bcs.struct("Token", {
      id: UID.bcs,
      balance: Balance.bcs,
    });
  }

  static fromFields<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    fields: Record<string, any>,
  ): Token<ToPhantomTypeArgument<T0>> {
    return Token.reified(typeArg).new({
      id: decodeFromFields(UID.reified(), fields.id),
      balance: decodeFromFields(Balance.reified(typeArg), fields.balance),
    });
  }

  static fromFieldsWithTypes<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    item: FieldsWithTypes,
  ): Token<ToPhantomTypeArgument<T0>> {
    if (!isToken(item.type)) {
      throw new Error("not a Token type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return Token.reified(typeArg).new({
      id: decodeFromFieldsWithTypes(UID.reified(), item.fields.id),
      balance: decodeFromFieldsWithTypes(Balance.reified(typeArg), item.fields.balance),
    });
  }

  static fromBcs<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: Uint8Array,
  ): Token<ToPhantomTypeArgument<T0>> {
    return Token.fromFields(typeArg, Token.bcs.parse(data));
  }

  toJSONField() {
    return {
      id: this.id,
      balance: this.balance.toJSONField(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    field: any,
  ): Token<ToPhantomTypeArgument<T0>> {
    return Token.reified(typeArg).new({
      id: decodeFromJSONField(UID.reified(), field.id),
      balance: decodeFromJSONField(Balance.reified(typeArg), field.balance),
    });
  }

  static fromJSON<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    json: Record<string, any>,
  ): Token<ToPhantomTypeArgument<T0>> {
    if (json.$typeName !== Token.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(Token.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return Token.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    content: SuiParsedData,
  ): Token<ToPhantomTypeArgument<T0>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isToken(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a Token object`);
    }
    return Token.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<T0 extends PhantomReified<PhantomTypeArgument>>(
    typeArg: T0,
    data: SuiObjectData,
  ): Token<ToPhantomTypeArgument<T0>> {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isToken(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a Token object`);
      }

      const gotTypeArgs = parseTypeName(data.bcs.type).typeArgs;
      if (gotTypeArgs.length !== 1) {
        throw new Error(
          `type argument mismatch: expected 1 type argument but got '${gotTypeArgs.length}'`,
        );
      }
      const gotTypeArg = gotTypeArgs[0] as string;
      const compressedGotType = compressSuiType(gotTypeArg);
      const expectedTypeArg = compressSuiType(extractType(typeArg));
      if (compressedGotType !== expectedTypeArg) {
        throw new Error(
          `type argument mismatch: expected '${expectedTypeArg}' but got '${compressedGotType}'`,
        );
      }

      return Token.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return Token.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<T0 extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: T0,
    id: string,
  ): Promise<Token<ToPhantomTypeArgument<T0>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching Token object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isToken(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a Token object`);
    }

    return Token.fromSuiObjectData(typeArg, res.data);
  }
}
