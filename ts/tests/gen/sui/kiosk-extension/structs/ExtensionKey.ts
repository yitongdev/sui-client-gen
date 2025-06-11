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
} from "../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
  parseTypeName,
} from "../../../_framework/util.js";
import { PKG_V31 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isExtensionKey(type: string): boolean {
  type = compressSuiType(type);
  return type.startsWith(`${PKG_V31}::kiosk_extension::ExtensionKey` + "<");
}

export interface ExtensionKeyFields<Ext extends PhantomTypeArgument> {
  dummyField: ToField<"bool">;
}

export type ExtensionKeyReified<Ext extends PhantomTypeArgument> = Reified<
  ExtensionKey<Ext>,
  ExtensionKeyFields<Ext>
>;

/**
 * Move struct: `ExtensionKey`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::kiosk_extension`
 *
 * @typeParam Ext - Type parameter 0 (phantom)
 */
export class ExtensionKey<Ext extends PhantomTypeArgument>
  implements StructClass
{
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V31}::kiosk_extension::ExtensionKey`;
  static readonly $numTypeParams = 1;
  static readonly $isPhantom = [true] as const;

  readonly $typeName = ExtensionKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V31}::kiosk_extension::ExtensionKey<${PhantomToTypeStr<Ext>}>`;
  readonly $typeArgs: [PhantomToTypeStr<Ext>];
  readonly $isPhantom = ExtensionKey.$isPhantom;

  readonly dummyField: ToField<"bool">;

  private constructor(
    typeArgs: [PhantomToTypeStr<Ext>],
    fields: ExtensionKeyFields<Ext>,
  ) {
    this.$fullTypeName = composeSuiType(
      ExtensionKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V31}::kiosk_extension::ExtensionKey<${PhantomToTypeStr<Ext>}>`;
    this.$typeArgs = typeArgs;

    this.dummyField = fields.dummyField;
  }

  static reified<Ext extends PhantomReified<PhantomTypeArgument>>(
    Ext: Ext,
  ): ExtensionKeyReified<ToPhantomTypeArgument<Ext>> {
    return {
      typeName: ExtensionKey.$typeName,
      fullTypeName: composeSuiType(
        ExtensionKey.$typeName,
        ...[extractType(Ext)],
      ) as `${typeof PKG_V31}::kiosk_extension::ExtensionKey<${PhantomToTypeStr<ToPhantomTypeArgument<Ext>>}>`,
      typeArgs: [extractType(Ext)] as [
        PhantomToTypeStr<ToPhantomTypeArgument<Ext>>,
      ],
      isPhantom: ExtensionKey.$isPhantom,
      reifiedTypeArgs: [Ext],
      fromFields: (fields: Record<string, any>) =>
        ExtensionKey.fromFields(Ext, fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        ExtensionKey.fromFieldsWithTypes(Ext, item),
      fromBcs: (data: Uint8Array) => ExtensionKey.fromBcs(Ext, data),
      bcs: ExtensionKey.bcs,
      fromJSONField: (field: any) => ExtensionKey.fromJSONField(Ext, field),
      fromJSON: (json: Record<string, any>) => ExtensionKey.fromJSON(Ext, json),
      fromSuiParsedData: (content: SuiParsedData) =>
        ExtensionKey.fromSuiParsedData(Ext, content),
      fromSuiObjectData: (content: SuiObjectData) =>
        ExtensionKey.fromSuiObjectData(Ext, content),
      fetch: async (client: SuiClient, id: string) =>
        ExtensionKey.fetch(client, Ext, id),
      new: (fields: ExtensionKeyFields<ToPhantomTypeArgument<Ext>>) => {
        return new ExtensionKey([extractType(Ext)], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return ExtensionKey.reified;
  }

  static phantom<Ext extends PhantomReified<PhantomTypeArgument>>(
    Ext: Ext,
  ): PhantomReified<ToTypeStr<ExtensionKey<ToPhantomTypeArgument<Ext>>>> {
    return phantom(ExtensionKey.reified(Ext));
  }
  static get p() {
    return ExtensionKey.phantom;
  }

  static get bcs() {
    return bcs.struct("ExtensionKey", {
      dummy_field: bcs.bool(),
    });
  }

  static fromFields<Ext extends PhantomReified<PhantomTypeArgument>>(
    typeArg: Ext,
    fields: Record<string, any>,
  ): ExtensionKey<ToPhantomTypeArgument<Ext>> {
    return ExtensionKey.reified(typeArg).new({
      dummyField: decodeFromFields("bool", fields.dummy_field),
    });
  }

  static fromFieldsWithTypes<Ext extends PhantomReified<PhantomTypeArgument>>(
    typeArg: Ext,
    item: FieldsWithTypes,
  ): ExtensionKey<ToPhantomTypeArgument<Ext>> {
    if (!isExtensionKey(item.type)) {
      throw new Error("not a ExtensionKey type");
    }
    assertFieldsWithTypesArgsMatch(item, [typeArg]);

    return ExtensionKey.reified(typeArg).new({
      dummyField: decodeFromFieldsWithTypes("bool", item.fields.dummy_field),
    });
  }

  static fromBcs<Ext extends PhantomReified<PhantomTypeArgument>>(
    typeArg: Ext,
    data: Uint8Array,
  ): ExtensionKey<ToPhantomTypeArgument<Ext>> {
    return ExtensionKey.fromFields(typeArg, ExtensionKey.bcs.parse(data));
  }

  toJSONField() {
    return {
      dummyField: this.dummyField,
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField<Ext extends PhantomReified<PhantomTypeArgument>>(
    typeArg: Ext,
    field: any,
  ): ExtensionKey<ToPhantomTypeArgument<Ext>> {
    return ExtensionKey.reified(typeArg).new({
      dummyField: decodeFromJSONField("bool", field.dummyField),
    });
  }

  static fromJSON<Ext extends PhantomReified<PhantomTypeArgument>>(
    typeArg: Ext,
    json: Record<string, any>,
  ): ExtensionKey<ToPhantomTypeArgument<Ext>> {
    if (json.$typeName !== ExtensionKey.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }
    assertReifiedTypeArgsMatch(
      composeSuiType(ExtensionKey.$typeName, extractType(typeArg)),
      json.$typeArgs,
      [typeArg],
    );

    return ExtensionKey.fromJSONField(typeArg, json);
  }

  static fromSuiParsedData<Ext extends PhantomReified<PhantomTypeArgument>>(
    typeArg: Ext,
    content: SuiParsedData,
  ): ExtensionKey<ToPhantomTypeArgument<Ext>> {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isExtensionKey(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a ExtensionKey object`,
      );
    }
    return ExtensionKey.fromFieldsWithTypes(typeArg, content);
  }

  static fromSuiObjectData<Ext extends PhantomReified<PhantomTypeArgument>>(
    typeArg: Ext,
    data: SuiObjectData,
  ): ExtensionKey<ToPhantomTypeArgument<Ext>> {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isExtensionKey(data.bcs.type)
      ) {
        throw new Error(`object at is not a ExtensionKey object`);
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

      return ExtensionKey.fromBcs(typeArg, fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return ExtensionKey.fromSuiParsedData(typeArg, data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch<Ext extends PhantomReified<PhantomTypeArgument>>(
    client: SuiClient,
    typeArg: Ext,
    id: string,
  ): Promise<ExtensionKey<ToPhantomTypeArgument<Ext>>> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching ExtensionKey object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isExtensionKey(res.data.bcs.type)
    ) {
      throw new Error(`object at id ${id} is not a ExtensionKey object`);
    }

    return ExtensionKey.fromSuiObjectData(typeArg, res.data);
  }
}
